module.exports = async function (context, req) {
  const date = "2023-04-10T11:07:18.597Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

