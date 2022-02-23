module.exports = async function (context, req) {
  const date = "2022-02-23T09:09:16.437Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

