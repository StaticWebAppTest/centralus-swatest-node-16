module.exports = async function (context, req) {
  const date = "2022-10-02T17:20:30.068Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

