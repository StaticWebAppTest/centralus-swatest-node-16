module.exports = async function (context, req) {
  const date = "2023-05-08T15:09:14.802Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

