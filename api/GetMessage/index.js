module.exports = async function (context, req) {
  const date = "2022-05-04T09:12:05.477Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

