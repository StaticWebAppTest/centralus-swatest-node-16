module.exports = async function (context, req) {
  const date = "2022-06-29T09:10:21.437Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

