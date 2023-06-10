module.exports = async function (context, req) {
  const date = "2023-06-10T18:10:06.051Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

