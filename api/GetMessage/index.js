module.exports = async function (context, req) {
  const date = "2022-06-18T18:12:40.125Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

