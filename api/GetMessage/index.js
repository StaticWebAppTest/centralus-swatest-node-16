module.exports = async function (context, req) {
  const date = "2022-08-18T11:09:45.054Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

