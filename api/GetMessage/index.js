module.exports = async function (context, req) {
  const date = "2022-10-01T06:31:58.719Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

