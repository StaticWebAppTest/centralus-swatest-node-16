module.exports = async function (context, req) {
  const date = "2023-02-27T09:11:07.437Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

