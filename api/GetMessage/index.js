module.exports = async function (context, req) {
  const date = "2022-03-04T12:16:45.284Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

