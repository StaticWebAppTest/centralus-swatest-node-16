module.exports = async function (context, req) {
  const date = "2023-10-16T19:07:21.370Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

