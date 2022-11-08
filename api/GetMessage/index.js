module.exports = async function (context, req) {
  const date = "2022-11-08T13:37:23.112Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

