module.exports = async function (context, req) {
  const date = "2022-12-10T09:09:04.579Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

