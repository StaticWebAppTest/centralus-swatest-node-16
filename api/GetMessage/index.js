module.exports = async function (context, req) {
  const date = "2022-10-07T17:31:19.437Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

