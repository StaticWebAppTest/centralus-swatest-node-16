module.exports = async function (context, req) {
  const date = "2022-08-16T10:11:16.719Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

