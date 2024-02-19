module.exports = async function (context, req) {
  const date = "2024-02-19T09:09:50.447Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

