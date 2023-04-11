module.exports = async function (context, req) {
  const date = "2023-04-11T11:07:30.002Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

