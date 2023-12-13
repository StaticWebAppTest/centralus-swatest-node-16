module.exports = async function (context, req) {
  const date = "2023-12-13T11:08:07.236Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

