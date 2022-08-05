module.exports = async function (context, req) {
  const date = "2022-08-05T09:11:11.774Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

