module.exports = async function (context, req) {
  const date = "2023-07-10T07:09:56.597Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

