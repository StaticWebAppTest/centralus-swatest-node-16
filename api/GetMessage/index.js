module.exports = async function (context, req) {
  const date = "2022-12-10T17:07:57.125Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

