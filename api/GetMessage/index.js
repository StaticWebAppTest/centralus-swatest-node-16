module.exports = async function (context, req) {
  const date = "2022-12-10T13:14:33.438Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

