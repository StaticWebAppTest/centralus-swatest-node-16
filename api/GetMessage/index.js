module.exports = async function (context, req) {
  const date = "2023-02-03T11:08:32.876Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

