module.exports = async function (context, req) {
  const date = "2023-02-11T09:08:53.002Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

