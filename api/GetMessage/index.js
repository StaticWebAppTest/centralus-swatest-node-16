module.exports = async function (context, req) {
  const date = "2024-05-10T09:10:44.051Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

