module.exports = async function (context, req) {
  const date = "2023-08-10T11:07:39.747Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

