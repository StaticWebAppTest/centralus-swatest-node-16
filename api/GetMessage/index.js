module.exports = async function (context, req) {
  const date = "2023-03-10T11:08:52.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

