module.exports = async function (context, req) {
  const date = "2022-10-25T11:13:18.377Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

