module.exports = async function (context, req) {
  const date = "2023-06-08T04:11:07.628Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

