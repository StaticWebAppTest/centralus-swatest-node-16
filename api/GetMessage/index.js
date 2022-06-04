module.exports = async function (context, req) {
  const date = "2022-06-04T17:09:04.487Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

