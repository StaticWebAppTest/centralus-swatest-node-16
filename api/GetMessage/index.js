module.exports = async function (context, req) {
  const date = "2022-06-16T21:09:01.359Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

