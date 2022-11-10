module.exports = async function (context, req) {
  const date = "2022-11-10T13:43:31.484Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

