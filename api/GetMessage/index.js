module.exports = async function (context, req) {
  const date = "2023-10-03T17:08:08.236Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

