module.exports = async function (context, req) {
  const date = "2022-07-13T07:09:54.601Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

