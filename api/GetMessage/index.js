module.exports = async function (context, req) {
  const date = "2023-05-27T17:07:46.724Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

