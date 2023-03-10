module.exports = async function (context, req) {
  const date = "2023-03-10T09:10:33.406Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

