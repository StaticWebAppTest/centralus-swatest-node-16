module.exports = async function (context, req) {
  const date = "2023-02-13T09:10:45.985Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

