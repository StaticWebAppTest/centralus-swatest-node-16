module.exports = async function (context, req) {
  const date = "2023-05-16T15:09:06.397Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

