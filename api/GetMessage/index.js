module.exports = async function (context, req) {
  const date = "2023-10-08T04:10:25.124Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

