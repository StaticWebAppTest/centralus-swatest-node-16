module.exports = async function (context, req) {
  const date = "2022-08-15T23:11:23.719Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

