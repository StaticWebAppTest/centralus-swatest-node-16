module.exports = async function (context, req) {
  const date = "2023-03-28T17:07:46.020Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

