module.exports = async function (context, req) {
  const date = "2022-10-28T15:12:39.526Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

