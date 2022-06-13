module.exports = async function (context, req) {
  const date = "2022-06-13T09:12:05.063Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

