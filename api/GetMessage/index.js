module.exports = async function (context, req) {
  const date = "2022-08-28T06:13:26.719Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

