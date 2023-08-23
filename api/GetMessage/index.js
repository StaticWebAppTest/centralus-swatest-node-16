module.exports = async function (context, req) {
  const date = "2023-08-23T02:13:07.124Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

