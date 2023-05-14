module.exports = async function (context, req) {
  const date = "2023-05-14T14:07:14.448Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

