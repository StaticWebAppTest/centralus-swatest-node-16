module.exports = async function (context, req) {
  const date = "2023-05-08T09:09:20.060Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

