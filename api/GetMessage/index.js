module.exports = async function (context, req) {
  const date = "2023-10-13T02:20:10.597Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

