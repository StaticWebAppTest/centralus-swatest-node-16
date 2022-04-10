module.exports = async function (context, req) {
  const date = "2022-04-10T13:17:23.724Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

