module.exports = async function (context, req) {
  const date = "2023-10-20T09:08:46.093Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

