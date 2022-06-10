module.exports = async function (context, req) {
  const date = "2022-06-10T14:09:51.777Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

