module.exports = async function (context, req) {
  const date = "2023-11-02T17:08:30.572Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

